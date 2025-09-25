import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";
import Button from "./Button";
import analytics from "../assets/carousel/analytics.jpg";
import dashboard from "../assets/carousel/dashboard.jpg";
import complaints from "../assets/carousel/complaints.jpg";
import exportt from "../assets/carousel/exportt.jpg";
import notification from "../assets/carousel/notifications.jpg";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {
  Building2,
  GraduationCap,
  Cog,
  ClipboardList,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  BarChart3,
  Bell,
  FileText,
  Lock,
  Zap,
} from "lucide-react";
import Section from "./Section";
import Subheading from "./Subheading";

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl shadow-sm border border-black/5 bg-white ${className}`}
  >
    {children}
  </div>
);
const CardBody = ({ className = "", children }) => (
  <div className={`p-6 body-2 mt-4 text-n-6 ${className}`}>{children}</div>
);

export default function ResoBridgePilot() {
  const [role, setRole] = useState("admin");
  const [showFlow, setShowFlow] = useState(true);

  const roleCopy = useMemo(
    () => ({
      admin: {
        title: "Administrators",
        bullets: [
          "See campus issues in real time",
          "Automated routing & SLA tracking",
          "Data for faster, better decisions",
        ],
        icon: <Building2 className="w-5 h-5" />,
      },
      staff: {
        title: "Staff / Hall Porters",
        bullets: [
          "Clear task assignments",
          "No more paper shuffling",
          "Close jobs with proof in one tap",
        ],
        icon: <Wrench className="w-5 h-5" />,
      },
      student: {
        title: "Students",
        bullets: [
          "Report issues in seconds",
          "Track progress from your phone",
          "Get your campus working for you",
        ],
        icon: <GraduationCap className="w-5 h-5" />,
      },
    }),
    []
  );

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    [".section-left", ".section-right"],
    {
      opacity: 0, // hidden at start
      scale: 0.9, // slightly smaller
    },
    {
      opacity: 1, // fully visible
      scale: 1, // full size
      duration: 1,
      ease: "power3.out",
      stagger: 0.3, // fade in one after the other
      scrollTrigger: {
        trigger: ".two-sections",
        start: "top 50%", // when container is 50% in view
        toggleActions: "play none none none",
      },
    }
  );

  return (
    <Section id="carousel">
      <div className="min-h-screen w-full container relative two-sections">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Meet the antidote to bureaucracy"
        />
        <section id="how" className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="section-left">
              <Subheading
                className="md:max-w-md lg:max-w-2xl md:text-2xl lg:text-3xl text-left"
                title="From frustration to resolution in 3 steps"
                text={
                  <ol className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-1">
                        <ClipboardList className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="font-semibold">Report</span> — a
                        student logs a broken fan in seconds.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">
                        <Cog className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="font-semibold">Route</span> — the
                        system assigns the right staff and labor automatically.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="font-semibold">Resolve</span> — proof
                        of fix captured; admin sees metrics update in real time.
                      </div>
                    </li>
                  </ol>
                }
              />

              <div className="flex items-center gap-3">
                <Button onClick={() => setShowFlow((s) => !s)}>
                  {showFlow ? "Pause" : "Play"} walkthrough
                </Button>
              </div>
            </div>

            <Card className="relative overflow-hidden section-right">
              <CardBody>
                <PipelineAnimation running={showFlow} />
              </CardBody>
            </Card>
          </div>
        </section>

        <section id="features" className="py-20 px-6">
          <Heading
            className="md:max-w-md lg:max-w-2xl md:text-2xl lg:text-3xl"
            title="What makes Resobridge powerful"
          />

          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            {/* Make This Section Dynamic Using Map */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-2xl mb-4 flex items-center gap-2 h4">
                  <BarChart3 />
                  Live analytics that don’t lie
                </h4>
                <p className="body-2 mt-4 text-n-4">
                  Stop guessing. With real-time analytics, admins and staff can
                  see patterns, track complaint volumes, and measure response
                  times instantly. Data speaks louder than excuses — and
                  Resobridge ensures you always have the full picture.
                </p>
              </div>
              <div>
                <img
                  src={analytics}
                  alt="Live analytics dashboard"
                  className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={complaints}
                  alt="Fast complaint resolution"
                  className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="order-1 md:order-2">
                <h4 className="text-2xl mb-4 flex items-center gap-2 h4">
                  <Zap /> Lightning-fast complaint resolution
                </h4>
                <p className="body-2 mt-4 text-n-4">
                  Complaints shouldn’t take months to fix. With instant routing
                  and automated assignments, issues reach the right person
                  immediately. The result? Resolutions that are swift,
                  transparent, and stress-free for everyone involved.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-2xl mb-4 flex items-center gap-2 h4">
                  <Bell /> Notifications that actually matter
                </h4>
                <p className="body-2 mt-4 text-n-4">
                  No more spam. Students, staff, and admins get alerts only when
                  action is required or when progress is made. That means fewer
                  interruptions, more focus, and communication that truly keeps
                  everyone on the same page.
                </p>
              </div>
              <div>
                <img
                  src={notification}
                  alt="Meaningful notifications"
                  className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={exportt}
                  alt="Export-ready reports"
                  className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="order-1 md:order-2">
                <h4 className="text-2xl mb-4 flex items-center gap-2 h4">
                  <FileText /> Export-ready PDF/Excel reports
                </h4>
                <p className="body-2 mt-4 text-n-4">
                  Need to share updates with stakeholders? Generate professional
                  PDF or Excel reports in seconds. Whether for board meetings,
                  accreditation bodies, or departmental reviews, your data is
                  always presentation-ready.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-2xl mb-4 flex items-center gap-2 h4">
                  <Lock /> Secure dashboards tailored by role
                </h4>
                <p className="body-2 mt-4 text-n-4">
                  Resobridge adapts to your role. Students see their case
                  updates, staff see assignments, and admins see the bigger
                  picture — all within secure, role-specific dashboards. Privacy
                  and clarity go hand in hand.
                </p>
              </div>
              <div>
                <img
                  src={dashboard}
                  alt="Secure dashboards"
                  className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            {/* I have already kept the dynamic values in the index.js file,, just help me map it  */}
            {/* Also note that they are commented */}
          </div>
        </section>
      </div>
    </Section>
  );
}

function RoleSwitch({ role, setRole }) {
  const roles = [
    {
      key: "student",
      label: "a Student",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      key: "admin",
      label: "an Admin",
      icon: <Building2 className="w-4 h-4" />,
    },
    { key: "staff", label: "Staff", icon: <Wrench className="w-4 h-4" /> },
  ];
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white border border-black/10 p-1">
      {roles.map((r) => (
        <button
          key={r.key}
          onClick={() => setRole(r.key)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm transition ${
            role === r.key ? "bg-black text-white" : "hover:bg-slate-100"
          }`}
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
    {
      label: "Student reports issue",
      icon: <ClipboardList className="w-4 h-4" />,
      color: "bg-blue-600",
    },
    {
      label: "Auto-routing to staff",
      icon: <Cog className="w-4 h-4" />,
      color: "bg-amber-500",
    },
    {
      label: "Work in progress",
      icon: <Wrench className="w-4 h-4" />,
      color: "bg-purple-600",
    },
    {
      label: "Resolved with proof",
      icon: <ShieldCheck className="w-4 h-4" />,
      color: "bg-emerald-600",
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {stages.map((s, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <motion.div
              className={`h-12 w-12 rounded-2xl text-white grid place-items-center shadow ${s.color}`}
              animate={{
                scale: step === i ? 1.05 : 1,
                opacity: step >= i ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {s.icon}
            </motion.div>
            <div className="mt-2 text-xs text-center body-2 text-n-6 max-w-[8rem]">
              {s.label}
            </div>
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
          className="mt-6 rounded-2xl border border-black/5 body-2 text-n-4 bg-slate-50 p-4 text-sm"
        >
          {step === 0 && (
            <div>A student submits “Fan not working in Room B201”.</div>
          )}
          {step === 1 && (
            <div>
              The system auto-assigns the hall porter and matches an available
              electrician.
            </div>
          )}
          {step === 2 && (
            <div>
              Staff marks progress. Student sees live status updates without
              chasing anyone.
            </div>
          )}
          {step === 3 && (
            <div>
              Fix completed with photo proof. Metrics update for the admin
              instantly.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
