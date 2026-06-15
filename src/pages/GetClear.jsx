import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Save, RotateCcw } from "lucide-react";
import { base44 } from "@/api/base44Client";
import GlassPanel from "../components/design/GlassPanel";
import SegmentCard from "../components/clarity/SegmentCard";
import {
  PageShell,
  PageHeader,
  BodyCopy,
  ChipGroup,
  HarborChip,
  HarborButton,
  HarborTextarea,
  DisplayQuote,
  SectionLabel,
  ButtonRow,
} from "../components/design/HarborPrimitives";
import { harbor } from "@/lib/harborTheme";

const INQUIRY_QUESTIONS = [
  "Is this what actually happened, or what you made it mean?",
  "If this story were not true, what would remain?",
  "What is the simplest version of what happened?",
  "What would you say to someone you love in this situation?",
  "Can you find one fact underneath this feeling?",
];

export default function GetClear() {
  const [step, setStep] = useState("write");
  const [rawText, setRawText] = useState("");
  const [segments, setSegments] = useState([]);
  const [smallerTruth, setSmallerTruth] = useState("");
  const [inquiryQuestion, setInquiryQuestion] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [bodyState, setBodyState] = useState("neutral");

  const bodyStates = ["calm", "activated", "tense", "tired", "heavy", "neutral"];

  const handleAnalyze = async () => {
    if (!rawText.trim()) return;
    setIsAnalyzing(true);
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a gentle self-reflection assistant for the Miravelys app. Analyze this personal entry and separate it into segments. For each segment, classify it as one of: fact, feeling, body_sensation, story, belief, identity_claim, borrowed_belief, fear_protective_belief, prediction, need, boundary, uncertainty.

Then create ONE smaller, more honest truth line that starts with "A smaller truth may be..."

Also select the most helpful inquiry question from this list that fits the entry:
${INQUIRY_QUESTIONS.map((q, i) => `${i + 1}. ${q}`).join("\n")}

IMPORTANT: Be tentative. Use "may be" language. Never claim certainty. Never diagnose.

Entry: "${rawText}"`,
      response_json_schema: {
        type: "object",
        properties: {
          segments: {
            type: "array",
            items: {
              type: "object",
              properties: {
                text: { type: "string" },
                type: { type: "string" },
                confidence: { type: "number" },
              },
            },
          },
          smaller_truth: { type: "string" },
          inquiry_question: { type: "string" },
        },
      },
    });
    setSegments(result.segments || []);
    setSmallerTruth(result.smaller_truth || "");
    setInquiryQuestion(result.inquiry_question || "");
    setStep("segments");
    setIsAnalyzing(false);
  };

  const handleSave = async () => {
    const h = new Date().getHours();
    let timeOfDay = "morning";
    if (h >= 12 && h < 17) timeOfDay = "afternoon";
    else if (h >= 17 && h < 21) timeOfDay = "evening";
    else if (h >= 21 || h < 5) timeOfDay = "night";
    await base44.entities.TruthEntry.create({
      raw_text: rawText,
      segments,
      smaller_truth: smallerTruth,
      inquiry_question: inquiryQuestion,
      body_state: bodyState,
      time_of_day: timeOfDay,
    });
    setRawText("");
    setSegments([]);
    setSmallerTruth("");
    setStep("write");
  };

  const handleTypeChange = (segment, newType) => {
    setSegments((prev) =>
      prev.map((s) => (s.text === segment.text ? { ...s, userConfirmedType: newType } : s))
    );
  };

  return (
    <PageShell>
      <PageHeader title="Get Clear" subtitle="Separate fact from story" />

      <AnimatePresence mode="wait">
        {step === "write" && (
          <motion.div
            key="write"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <GlassPanel className="space-y-5">
              <BodyCopy muted>Write what feels true right now. It can be messy.</BodyCopy>
              <HarborTextarea
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="I keep thinking that..."
              />
              <ChipGroup label="Body state right now">
                {bodyStates.map((state) => (
                  <HarborChip
                    key={state}
                    selected={bodyState === state}
                    tone="sand"
                    onClick={() => setBodyState(state)}
                  >
                    {state}
                  </HarborChip>
                ))}
              </ChipGroup>
              <HarborButton
                variant="primary"
                size="block"
                onClick={handleAnalyze}
                disabled={!rawText.trim() || isAnalyzing}
              >
                {isAnalyzing ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Separating layers...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Separate what's here
                  </span>
                )}
              </HarborButton>
            </GlassPanel>
          </motion.div>
        )}

        {step === "segments" && (
          <motion.div
            key="segments"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <BodyCopy muted className="px-1">
              The app separated your entry into layers. You can edit any label — the app may be wrong.
            </BodyCopy>
            <div className="space-y-3">
              {segments.map((seg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <SegmentCard
                    segment={seg}
                    onTypeChange={handleTypeChange}
                    onConfirm={() => {}}
                    onReject={() => setSegments((prev) => prev.filter((_, j) => j !== i))}
                  />
                </motion.div>
              ))}
            </div>
            {inquiryQuestion && (
              <GlassPanel variant="subtle" className="space-y-3">
                <SectionLabel>One question to sit with</SectionLabel>
                <DisplayQuote className="text-base">"{inquiryQuestion}"</DisplayQuote>
              </GlassPanel>
            )}
            <HarborButton variant="sand" size="block" onClick={() => setStep("truth")}>
              <Sparkles className="h-4 w-4" />
              See smaller truth
            </HarborButton>
          </motion.div>
        )}

        {step === "truth" && (
          <motion.div
            key="truth"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <GlassPanel variant="glow" className="space-y-4 py-8 text-center">
              <SectionLabel>A smaller truth</SectionLabel>
              <DisplayQuote className="px-2">"{smallerTruth}"</DisplayQuote>
              <p className="text-xs font-light" style={{ color: harbor.dimmer }}>
                This is tentative. You can edit or discard it.
              </p>
            </GlassPanel>
            <ButtonRow>
              <HarborButton
                variant="ghost"
                size="block"
                className="flex-1"
                onClick={() => {
                  setStep("write");
                  setSegments([]);
                  setSmallerTruth("");
                }}
              >
                <RotateCcw className="h-4 w-4" />
                Start over
              </HarborButton>
              <HarborButton variant="primary" size="block" className="flex-1" onClick={handleSave}>
                <Save className="h-4 w-4" />
                Save entry
              </HarborButton>
            </ButtonRow>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
