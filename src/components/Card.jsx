import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Cog,
  ClipboardList,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  
} from "lucide-react";

const Button = ({ className = "", children, ...props }) => (
  <button
    className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm hover:shadow transition active:scale-[0.99] ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl shadow-sm border border-black/5 bg-white ${className}`}>{children}</div>
);

const CardBody = ({ className = "", children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export default function HowThisWorks() {
  const [role, setRole] = useState("student");
  const [showFlow, setShowFlow] = useState(true);

  const roleCopy = useMemo(
    () => ({
      admin: {
        title: "Administrators",
        bullets: [
          "See campus issues in real time",
          "Automated routing & SLA tracking",
          "Data for faster, better decisions"
        ],
        icon: <Building2 className="w-5 h-5" />
      },
      staff: {
        title: "Staff / Hall Porters",
        bullets: [
          "Clear task assignments",
          "No more paper shuffling",
          "Close jobs with proof in one tap"
        ],
        icon: <Wrench className="w-5 h-5" />
      },
      student: {
        title: "Students",
        bullets: [
          "Report issues in seconds",
          "Track progress from your phone",
          "Get your campus working for you"
        ],
        icon: <GraduationCap className="w-5 h-5" />
      }
    }),
    []
  );

  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-5 items-start">
        {/* Left Side: Role Switch Section */}
        <Card>
          <CardBody className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-black opacity-100">I am</span>
              <RoleSwitch role={role} setRole={setRole} />
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-3 rounded-2xl bg-slate-900 text-white">
                {roleCopy[role].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-black font-semibold">For {roleCopy[role].title}</h3>
                <ul className="mt-2 grid gap-2 text-slate-600 text-sm list-disc pl-5">
                  {roleCopy[role].bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Right Side: From frustration to resolution */}
        <Card>
          <CardBody>
            <h3 className="text-2xl text-black font-semibold mb-6">From frustration to resolution in 3 steps</h3>
            <ol className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <ClipboardList className="w-5 h-5 mt-1" />
                <div><span className="font-semibold">Report</span> — a student logs a broken fan in seconds.</div>
              </li>
              <li className="flex items-start gap-3">
                <Cog className="w-5 h-5 mt-1" />
                <div><span className="font-semibold">Route</span> — the system assigns the right staff and labor automatically.</div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1" />
                <div><span className="font-semibold">Resolve</span> — proof of fix captured; admin sees metrics update in real time.</div>
              </li>
            </ol>
            <div className="mt-6 flex items-center gap-3">
              <Button className="bg-black text-white" onClick={() => setShowFlow((s) => !s)}>
                {showFlow ? "Pause" : "Play"} walkthrough
              </Button>
            </div>
            <div className="mt-6">
              <PipelineAnimation running={showFlow} />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

function RoleSwitch({ role, setRole }) {
  const roles = [
    { key: "student", label: "a Student", icon: <GraduationCap className="w-4 h-4" /> },
    { key: "admin", label: "an Admin", icon: <Building2 className="w-4 h-4" /> },
    { key: "staff", label: "Staff", icon: <Wrench className="w-4 h-4" /> }
  ];
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white border border-black/10 p-1">
      {roles.map((r) => (
        <button
          key={r.key}
          onClick={() => setRole(r.key)}
          className={`flex items-center gap-2 px-3 py-1.5 text-black rounded-xl text-sm transition ${role === r.key ? "bg-black text-white" : "hover:bg-slate-100"}`}
        >
          {r.icon}
          {r.label}
        </button>
      ))}
    </div>
  );
}

function PipelineAnimation({ running }) {
  const [step, setStep] = useState(0);
  const timerRef = useRef(null);

  React.useEffect(() => {
    if (!running) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 1600);
    return () => clearInterval(timerRef.current);
  }, [running]);

  const stages = [
    { label: "Student reports issue", icon: <ClipboardList className="w-4 h-4" />, color: "bg-blue-600" },
    { label: "Auto-routing to staff", icon: <Cog className="w-4 h-4" />, color: "bg-amber-500" },
    { label: "Work in progress", icon: <Wrench className="w-4 h-4" />, color: "bg-purple-600" },
    { label: "Resolved with proof", icon: <ShieldCheck className="w-4 h-4" />, color: "bg-emerald-600" }
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {stages.map((s, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <motion.div
              className={`h-12 w-12 rounded-2xl text-white grid place-items-center shadow ${s.color}`}
              animate={{ scale: step === i ? 1.05 : 1, opacity: step >= i ? 1 : 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {s.icon}
            </motion.div>
            <div className="mt-2 text-xs text-center text-slate-600 max-w-[8rem]">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 relative h-2 rounded-full bg-slate-200 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-black"
          animate={{ width: `${(step / (stages.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-6 rounded-2xl border border-black/5 bg-slate-50 p-4 text-sm text-slate-700"
        >
          {step === 0 && <div>A student submits “Fan not working in Room 2B”. It takes 12 seconds.</div>}
          {step === 1 && <div>The system auto-assigns the hall porter and matches an available electrician.</div>}
          {step === 2 && <div>Staff marks progress. Student sees live status updates without chasing anyone.</div>}
          {step === 3 && <div>Fix completed with photo proof. Metrics update for the admin instantly.</div>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
