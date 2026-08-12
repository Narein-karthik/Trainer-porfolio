"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Screen =
  | "login"
  | "faculty"
  | "start"
  | "capture"
  | "processing"
  | "review"
  | "confirmation"
  | "history"
  | "reports"
  | "admin"
  | "students"
  | "operations"
  | "student"
  | "principal";

const screenLabels: Record<Screen, string> = {
  login: "Faculty login",
  faculty: "Faculty dashboard",
  start: "Start attendance",
  capture: "Photo capture",
  processing: "Processing",
  review: "Review attendance",
  confirmation: "Confirmation",
  history: "Attendance history",
  reports: "Reports & analytics",
  admin: "Admin dashboard",
  students: "Student management",
  operations: "Operational dashboard",
  student: "Student dashboard",
  principal: "Principal dashboard",
};

const iconPaths = {
  report: "/portal-assets/faculty-report.svg",
  dashboard: "/portal-assets/faculty-dashboard.svg",
  students: "/portal-assets/faculty-students.svg",
  faculty: "/portal-assets/faculty-faculty.svg",
  departments: "/portal-assets/faculty-departments.svg",
  reports: "/portal-assets/faculty-reports.svg",
  settings: "/portal-assets/faculty-settings.svg",
  logout: "/portal-assets/faculty-logout.svg",
};

function Icon({ src, alt = "" }: { src: string; alt?: string }) {
  return <img className="portal-icon" src={src} alt={alt} width="20" height="20" />;
}

function DemoSwitcher({ screen, onChange }: { screen: Screen; onChange: (screen: Screen) => void }) {
  return (
    <label className="demo-switcher">
      <span>Demo view</span>
      <select value={screen} onChange={(event) => onChange(event.target.value as Screen)} aria-label="Switch prototype view">
        {Object.entries(screenLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
      </select>
    </label>
  );
}

function SideNav({
  active,
  variant = "admin",
  dashboardTarget = "admin",
  onNavigate,
}: {
  active: string;
  variant?: "admin" | "student" | "operations" | "principal";
  dashboardTarget?: Screen;
  onNavigate: (screen: Screen) => void;
}) {
  const isStudent = variant === "student";
  const isOperations = variant === "operations";
  const brand = isStudent || variant === "principal" ? "Smart Portal" : "Admin Portal";
  const subtitle = isStudent || variant === "principal" ? "College Management" : isOperations ? "Operations & Setup" : "Academic Year 2023-24";
  const nav = isOperations
    ? [
        ["Dashboard", "dashboard", iconPaths.dashboard],
        ["Students", "students", iconPaths.students],
        ["Faculty", "faculty", iconPaths.faculty],
        ["Departments", "departments", iconPaths.departments],
        ["Programmes", "programmes", iconPaths.report],
        ["Semesters", "semesters", iconPaths.reports],
        ["Sections", "sections", iconPaths.dashboard],
        ["Subjects", "subjects", iconPaths.reports],
        ["Timetable", "timetable", iconPaths.departments],
        ["Face Registration", "face", iconPaths.students],
      ]
    : isStudent || variant === "principal"
      ? [
          ["Dashboard", "dashboard", iconPaths.dashboard],
          ["Analytics", "analytics", iconPaths.reports],
          ["Attendance", "attendance", iconPaths.report],
          ["Faculty", "faculty", iconPaths.faculty],
          ["Settings", "settings", iconPaths.settings],
        ]
      : [
          ["Dashboard", "dashboard", iconPaths.dashboard],
          ["Students", "students", iconPaths.students],
          ["Faculty", "faculty", iconPaths.faculty],
          ["Departments", "departments", iconPaths.departments],
          ["Reports", "reports", iconPaths.reports],
        ];

  const navigate = (key: string) => {
    if (key === "dashboard") onNavigate(dashboardTarget);
    else if (key === "students") onNavigate("students");
    else if (key === "reports" || key === "analytics") onNavigate("reports");
    else if (key === "attendance") onNavigate(isStudent ? "student" : "history");
  };

  return (
    <aside className={`portal-sidebar portal-sidebar-${variant}`}>
      <div className="sidebar-brand">
        <span className="sidebar-logo"><img src="/portal-assets/faculty-logo.jpg" alt="College emblem" /></span>
        <span><strong>{brand}</strong><small>{subtitle}</small></span>
      </div>
      <button className="sidebar-primary" onClick={() => onNavigate(isOperations ? "students" : "reports")}>
        <Icon src={isOperations ? iconPaths.students : iconPaths.report} />
        {isOperations ? "Bulk Import" : "Generate Report"}
      </button>
      <nav aria-label={`${brand} navigation`}>
        {nav.map(([label, key, icon], index) => (
          <button className={active === key ? "active" : ""} onClick={() => navigate(key)} key={`${key}-${index}`}>
            <Icon src={icon} /><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button onClick={() => onNavigate("student")}><Icon src={iconPaths.settings} /><span>Support</span></button>
        <button onClick={() => onNavigate("login")}><Icon src={iconPaths.logout} /><span>Logout</span></button>
      </div>
    </aside>
  );
}

function TopBar({ title = "SmartAttend ERP", search = "Search students, faculty..." }: { title?: string; search?: string }) {
  return (
    <header className="portal-topbar">
      <strong>{title}</strong>
      <div className="topbar-tools">
        <label className="topbar-search"><span>Search</span><input aria-label="Search" placeholder={search} /></label>
        <button aria-label="Notifications" className="topbar-round">●</button>
        <button aria-label="Profile" className="topbar-avatar">A</button>
      </div>
    </header>
  );
}

function StatusPill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "red" | "amber" | "blue" }) {
  return <span className={`status-pill status-${tone}`}>{children}</span>;
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); onLogin(); };
  return (
    <main className="login-screen">
      <form className="login-card screen-card" onSubmit={submit}>
        <div className="login-mark"><Icon src={iconPaths.report} alt="Faculty portal" /></div>
        <h1>Faculty Portal</h1>
        <p>Sign in to access SmartAttend ERP</p>
        <label><span>Employee ID / Email</span><input required defaultValue="dr.smith@smartattend.edu" placeholder="Enter your ID or email" /></label>
        <label><span>Password</span><span className="password-wrap"><input required type={showPassword ? "text" : "password"} defaultValue="smartattend" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></span></label>
        <button className="forgot" type="button">Forgot password?</button>
        <label className="remember"><input type="checkbox" /> Remember this device</label>
        <button className="button-dark" type="submit">Sign In <span>→</span></button>
        <p className="login-help">Need help? <button type="button">Contact IT Support</button></p>
      </form>
    </main>
  );
}

const facultyClasses = [
  { subject: "Data Structures", section: "CS-301 • 09:00 AM", room: "Lec Hall A", status: "Attendance Taken", action: "View Record", done: true },
  { subject: "Operating Systems", section: "CS-302 • 11:30 AM", room: "Lab 3", status: "Pending", action: "Take Attendance", current: true },
  { subject: "Computer Networks", section: "CS-303 • 02:00 PM", room: "Lec Hall B", status: "Pending", action: "Take Attendance", disabled: true },
];

function FacultyDashboard({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="portal-shell screen-enter">
      <SideNav active="dashboard" dashboardTarget="faculty" onNavigate={onNavigate} />
      <main className="faculty-main portal-content">
        <header className="faculty-heading">
          <div><h1>Welcome, Dr. Smith</h1><p>Wednesday, August 12, 2026</p></div>
          <div className="quick-stats"><article><small>Completed</small><strong>2</strong></article><article><small>Pending</small><strong className="blue">3</strong></article></div>
        </header>
        <section>
          <h2>Today&apos;s Classes</h2>
          <div className="class-list">
            {facultyClasses.map((item, index) => (
              <article className={`class-card stagger-${index + 1} ${item.current ? "current" : ""}`} key={item.subject}>
                <dl><div><dt>Subject</dt><dd>{item.subject}</dd></div><div><dt>Section & Time</dt><dd>{item.section}</dd></div><div><dt>Room</dt><dd>{item.room}</dd></div><div><dt>Status</dt><dd><StatusPill tone={item.done ? "green" : "neutral"}>{item.status}</StatusPill></dd></div></dl>
                <button disabled={item.disabled} className={item.current ? "button-dark compact" : "button-outline compact"} onClick={() => item.done ? onNavigate("history") : onNavigate("start")}>{item.action}</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function StartAttendance({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <main className="centered-screen start-screen screen-enter">
      <section className="start-wrap">
        <button className="back-link" onClick={() => onNavigate("faculty")}>← Back to dashboard</button>
        <article className="start-card screen-card">
          <header><h1>Computer Networks</h1><p>▥ &nbsp;Room 302, Engineering Block</p></header>
          <dl className="session-details"><div><dt>Section</dt><dd>A</dd></div><div><dt>Period</dt><dd>9:00 AM</dd></div><div><dt>Duration</dt><dd>60 min</dd></div><div><dt>Class Strength</dt><dd>60</dd></div></dl>
          <div className="session-features"><div><span className="feature-dot blue-dot">◎</span><p><strong>Location Tracking</strong>Geofence active (50m radius)</p></div><div><span className="feature-dot dark-dot">◷</span><p><strong>Session Timeout</strong>Auto-close in 15 mins</p></div></div>
          <button className="button-dark button-large" onClick={() => onNavigate("capture")}>▷ &nbsp; Start Attendance Session</button>
          <p className="muted center">Students will be notified to mark their attendance.</p>
        </article>
      </section>
    </main>
  );
}

function CaptureScreen({ captured, setCaptured, onNavigate }: { captured: number; setCaptured: (value: number) => void; onNavigate: (screen: Screen) => void }) {
  const positions = ["Left", "Centre", "Right"];
  const capture = () => setCaptured(Math.min(3, captured + 1));
  return (
    <main className="mobile-stage screen-enter">
      <section className="capture-phone">
        <header><button onClick={() => onNavigate("start")} aria-label="Back"><Icon src="/portal-assets/capture-back.svg" /></button><h1>Capture Classroom</h1></header>
        <div className="camera-view" style={{ backgroundImage: "url('/portal-assets/classroom-main.jpg')" }}>
          <div className="capture-tip"><Icon src="/portal-assets/capture-info.svg" />Please capture <strong>Left, Centre, and Right</strong> portions.</div>
          <div className="camera-guide"><span>Capture<br />{positions[Math.min(captured, 2)]}</span></div>
          <div className="camera-controls"><StatusPill>{captured} of 3 Captured</StatusPill><button className="shutter" onClick={capture} aria-label="Capture photo"><Icon src="/portal-assets/capture-camera.svg" /></button><button className="flip-camera" aria-label="Switch camera"><Icon src="/portal-assets/capture-flip.svg" /></button></div>
        </div>
        <section className="capture-tray">
          <h2>Captured Portions</h2>
          <div className="capture-items">
            {positions.map((position, index) => index < captured ? (
              <article className="capture-thumb" key={position} style={{ backgroundImage: "url('/portal-assets/classroom-thumb.jpg')" }}><StatusPill tone="green">✓ {position}</StatusPill><div><button onClick={() => setCaptured(Math.max(0, captured - 1))}>Retake</button><button onClick={() => setCaptured(Math.max(0, captured - 1))}>Remove</button></div></article>
            ) : (
              <article className="capture-pending" key={position}><span>{position}</span><Icon src="/portal-assets/capture-camera.svg" /><strong>{index === captured ? "Pending" : "Waiting"}</strong></article>
            ))}
          </div>
        </section>
        <footer className="capture-footer"><button disabled={captured < 3} onClick={() => onNavigate("processing")}><Icon src="/portal-assets/capture-people.svg" />Process Attendance</button><p>{captured < 3 ? "Complete all captures to process" : "All captures ready for analysis"}</p></footer>
      </section>
    </main>
  );
}

function ProcessingScreen() {
  return (
    <main className="mobile-stage processing-stage screen-enter"><section className="processing-card screen-card"><p>SmartAttend ERP</p><div className="processing-spinner" /><h1>Analysing classroom<br />attendance</h1><p>Please wait while we process the<br />records.</p><ol><li className="done">Images Received</li><li className="done">Attendance Analysis</li><li className="working">Preparing Results</li></ol></section></main>
  );
}

function ReviewScreen({ onNavigate, onToast }: { onNavigate: (screen: Screen) => void; onToast: (message: string) => void }) {
  const [sarahPresent, setSarahPresent] = useState(false);
  const [michaelPresent, setMichaelPresent] = useState(true);
  return (
    <div className="portal-shell review-screen screen-enter">
      <SideNav active="students" dashboardTarget="faculty" onNavigate={onNavigate} />
      <main className="portal-content review-main">
        <header className="review-header"><div><button onClick={() => onNavigate("faculty")}>← Back to Dashboard</button><span>/ &nbsp; Class CS-301</span><h1>Review Attendance</h1></div><dl><div><dt>Date</dt><dd>Oct 24, 2023</dd></div><div><dt>Instructor</dt><dd>Dr. A. Smith</dd></div></dl></header>
        <section className="review-stats"><article><small>Total Students</small><strong>42</strong></article><article className="green-edge"><small>Suggested Present</small><strong>35 <StatusPill tone="green">83%</StatusPill></strong></article><article className="amber-card"><small>Needs Review</small><strong>4</strong></article><article className="red-edge"><small>Not Detected</small><strong>3</strong></article></section>
        <section className="review-list">
          <header><h2>Needs Review</h2><StatusPill tone="amber">Action Required</StatusPill></header>
          <PersonRow initials="SJ" name="Sarah Jenkins" id="CS21045" warning="Low Confidence Match" present={sarahPresent} onToggle={() => setSarahPresent(!sarahPresent)} />
          <PersonRow initials="MJ" name="Michael Johnson" id="CS21088" warning="Partial Obscuration" present={michaelPresent} onToggle={() => setMichaelPresent(!michaelPresent)} />
          <h3 className="not-detected">Not Detected <span>3 Students</span></h3>
          <PersonRow initials="DL" name="David Lee" id="CS21012" present={false} onToggle={() => onToast("David remains marked absent")}/>
          <button className="suggested-row">✓ Suggested Present <span>35 Students⌄</span></button>
        </section>
        <footer className="review-actions"><p>Confirming will log <strong>{35 + Number(sarahPresent) + Number(michaelPresent)} Present</strong> and <strong className="red">{7 - Number(sarahPresent) - Number(michaelPresent)} Absent.</strong></p><button className="button-outline" onClick={() => onToast("Draft saved locally")}>Save Draft</button><button className="button-dark" onClick={() => onNavigate("confirmation")}>Finalize Attendance</button></footer>
      </main>
    </div>
  );
}

function PersonRow({ initials, name, id, warning, present, onToggle }: { initials: string; name: string; id: string; warning?: string; present: boolean; onToggle: () => void }) {
  return <article className="person-row"><span className="person-avatar">{initials}</span><p><strong>{name}</strong><small>USN: &nbsp;{id}</small></p>{warning && <StatusPill tone="amber">{warning}</StatusPill>}<button className={`attendance-toggle ${present ? "on" : ""}`} onClick={onToggle} aria-pressed={present}><span />{present ? "Present" : "Absent"}</button></article>;
}

function ConfirmationScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <main className="confirmation-screen screen-enter"><TopBar /><section className="confirmation-card screen-card"><div className="success-ring">✓</div><h1>Attendance Successfully<br />Recorded</h1><p>The attendance records for CS-101 Data Structures have<br />been saved to the database.</p><div className="confirmation-stats"><article><small>Present</small><strong>42</strong></article><article><small>Absent</small><strong>5</strong></article></div><dl><dt>◷ Submission Time</dt><dd>10:45 AM, Oct 24</dd></dl><button className="button-dark" onClick={() => onNavigate("faculty")}>Return to Dashboard</button></section></main>
  );
}

const historyRows = [
  ["Introduction to Computer Science", "CS101 - Section A", "Oct 24, 2023", "09:00 AM - 10:30 AM", "JD", "Dr. J. Doe", "45", "3"],
  ["Advanced Calculus", "MATH201 - Section B", "Oct 23, 2023", "11:00 AM - 12:30 PM", "AS", "Prof. A. Smith", "38", "5"],
  ["General Physics", "PHYS101 - Section A", "Oct 22, 2023", "02:00 PM - 03:30 PM", "MK", "Dr. M. Khan", "50", "0"],
];

function HistoryScreen({ onNavigate, onToast }: { onNavigate: (screen: Screen) => void; onToast: (message: string) => void }) {
  return (
    <div className="portal-shell screen-enter"><SideNav active="reports" dashboardTarget="admin" onNavigate={onNavigate} /><main className="portal-with-topbar"><TopBar search="Search..." /><div className="portal-content history-main"><header className="page-heading"><div><h1>Attendance History</h1><p>Review past session records and attendance metrics.</p></div><button className="button-outline" onClick={() => onToast("CSV export prepared for this demo")}>↓ Export CSV</button></header><section className="filter-card"><label>Subject<select><option>All Subjects</option></select></label><label>Section<select><option>All Sections</option></select></label><label>Date Range<input type="date" /></label><button className="button-dark" onClick={() => onToast("Filters applied")}>Apply Filters</button></section><section className="data-card history-table"><header><h2>Previous Attendance Sessions</h2><span>Showing 1-5 of 24 records</span></header><div className="table-scroll"><table><thead><tr><th>Subject & Section</th><th>Date & Time</th><th>Instructor</th><th>Status Overview</th><th>Action</th></tr></thead><tbody>{historyRows.map(row => <tr key={row[0]}><td><strong>{row[0]}</strong><small>{row[1]}</small></td><td>{row[2]}<small>{row[3]}</small></td><td><span className="mini-avatar">{row[4]}</span>{row[5]}</td><td><StatusPill tone="green">{row[6]} Present</StatusPill> <StatusPill tone="red">{row[7]} Absent</StatusPill></td><td><button onClick={() => onNavigate("review")}>View Details</button></td></tr>)}</tbody></table></div><footer><button disabled>Previous</button><span><b>1</b> 2 &nbsp; 3</span><button>Next</button></footer></section></div></main></div>
  );
}

const lowAttendance = [["JD", "John Doe", "CS21045", "Computer Science", "62%"], ["AS", "Alice Smith", "EE21102", "Electrical Eng.", "68%"], ["RJ", "Robert Johnson", "ME21088", "Mechanical Eng.", "71%"]];

function ReportsScreen({ onNavigate, onToast }: { onNavigate: (screen: Screen) => void; onToast: (message: string) => void }) {
  const bars = [82, 72, 85, 65, 77, 85];
  return (
    <div className="portal-shell screen-enter"><SideNav active="reports" dashboardTarget="admin" onNavigate={onNavigate} /><main className="portal-with-topbar"><TopBar title="Reports Overview" /><div className="portal-content reports-main"><header className="page-heading"><div><h1>Attendance Analytics</h1><p>Comprehensive breakdown of student and department attendance.</p></div><div><button className="button-outline" onClick={() => onToast("Report filters opened")}>Filter</button><button className="button-dark" onClick={() => onToast("Report export is ready")}>Export Report</button></div></header><section className="analytics-grid"><article className="chart-card"><h2>Subject-wise Attendance</h2><div className="bar-chart">{bars.map((height, index) => <div key={index}><span style={{ "--bar-height": `${height}%` } as React.CSSProperties} className={index === 3 ? "alert-bar" : ""} /><small>{["CS101", "MA201", "PH102", "EE301", "CS102", "HU101"][index]}</small></div>)}</div></article><article className="average-card"><h2>Overall Average</h2><div className="donut" style={{ "--progress": "78%" } as React.CSSProperties}><strong>78%</strong><small>Avg. Attendance</small></div><p><span>● Present</span><span className="red">● Absent</span></p></article></section><section className="data-card alert-table"><header><div><h2>⚠ Low Attendance Alert</h2><p>Students below 75% mandatory threshold.</p></div><button onClick={() => onNavigate("students")}>View All</button></header><table><thead><tr><th>Student Name</th><th>Roll No.</th><th>Department</th><th>Percentage</th><th>Action</th></tr></thead><tbody>{lowAttendance.map(row => <tr key={row[2]}><td><span className="mini-avatar">{row[0]}</span><strong>{row[1]}</strong></td><td>{row[2]}</td><td>{row[3]}</td><td><StatusPill tone="red">{row[4]}</StatusPill></td><td><button onClick={() => onToast(`Message queued for ${row[1]}`)}>✉</button></td></tr>)}</tbody></table></section></div></main></div>
  );
}

function KpiCard({ label, value, badge, tone }: { label: string; value: string; badge?: string; tone?: string }) {
  return <article className={`kpi-card ${tone || ""}`}><div>{badge && <StatusPill tone={tone === "danger" ? "red" : "green"}>{badge}</StatusPill>}</div><small>{label}</small><strong>{value}</strong></article>;
}

function AttendanceKpi({ operational = false }: { operational?: boolean }) {
  return <article className="attendance-kpi"><header><span>▣</span><small>Classes Today<strong>342</strong></small></header><small>{operational ? "Attendance Sessions Completed" : "Attendance Completed Today"}</small><div><strong>87%</strong><span>298 / 342</span></div><i><b /></i></article>;
}

function AdminDashboard({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="portal-shell screen-enter"><SideNav active="dashboard" dashboardTarget="admin" onNavigate={onNavigate} /><main className="portal-with-topbar"><TopBar /><div className="portal-content dashboard-main"><header className="page-heading"><div><h1>Dashboard Overview</h1><p>High-level statistics and daily operational metrics.</p></div></header><section className="kpi-grid"><KpiCard label="Total Students" value="14,258" badge="+4.2%" /><KpiCard label="Total Faculty" value="845" badge="+1.1%" /><KpiCard label="Departments" value="24" /><AttendanceKpi /></section><section className="dashboard-grid"><article className="trend-card"><header><h2>Weekly Attendance Trends</h2><button onClick={() => onNavigate("reports")}>View Full Report →</button></header><div className="line-chart"><span className="line line-a" /><span className="line line-b" /><div className="chart-points">{[72, 66, 78, 74, 88, 83, 91].map((value, index) => <i key={index} style={{ left: `${8 + index * 14}%`, bottom: `${value - 45}%` }} />)}</div><small>Mon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fri &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sat</small></div></article><Alerts title="Compliance Alerts" /></section></div></main></div>
  );
}

function Alerts({ title = "Operational Alerts" }: { title?: string }) {
  const items = title.startsWith("Compliance") ? [["Low Attendance - CS201", "Class average dropped below 75% threshold for the past week."], ["Faculty Leave Request", "Prof. Smith requested leave for tomorrow. Substitute required."], ["Missing Registers", "4 morning classes have not submitted attendance data yet."]] : [["Missing Registers", "4 morning classes have not submitted attendance data yet."], ["Registration Bottleneck", "150 students pending face registration in Mechanical Eng."], ["Bulk Import Failed", "Faculty list import failed at row 45 due to a duplicate ID."]];
  return <article className="alerts-card"><header><h2>{title}</h2><StatusPill tone="red">3</StatusPill></header>{items.map((item, index) => <div className="alert-row" key={item[0]}><span>{index === 1 ? "ⓘ" : "⚠"}</span><p><strong>{item[0]}</strong>{item[1]}<small>{index === 0 ? "10 mins ago" : index === 1 ? "1 hour ago" : "2 hours ago"}</small></p></div>)}<button>View All Alerts</button></article>;
}

const students = [
  { id: "STU-2023-001", initials: "AJ", name: "Alex Johnson", email: "alex.j@university.edu", dept: "Computer Science", sem: "4th / A", reg: "Enrolled", active: true },
  { id: "STU-2023-042", initials: "SM", name: "Sarah Miller", email: "s.miller@university.edu", dept: "Electrical Eng.", sem: "2nd / B", reg: "Pending", active: true },
  { id: "STU-2022-118", initials: "MC", name: "Marcus Chen", email: "m.chen@university.edu", dept: "Mechanical Eng.", sem: "6th / A", reg: "Suspended", active: false },
];

function StudentManagement({ onNavigate, onToast }: { onNavigate: (screen: Screen) => void; onToast: (message: string) => void }) {
  const [query, setQuery] = useState("");
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() => Object.fromEntries(students.map(student => [student.id, student.active])));
  const rows = students.filter(student => `${student.id} ${student.name} ${student.email}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="portal-shell screen-enter"><SideNav active="students" dashboardTarget="admin" onNavigate={onNavigate} /><main className="portal-with-topbar"><TopBar search="Search..." /><div className="portal-content students-main"><header className="page-heading"><div><h1>Student Management</h1><p>Manage enrollments, statuses, and profiles.</p></div><div><button className="button-outline" onClick={() => onToast("Bulk import panel opened")}>Bulk Import</button><button className="button-dark" onClick={() => onToast("New student form opened")}>+ Add Student</button></div></header><section className="filter-card student-filters"><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by ID, Name, or Email..." aria-label="Search students" /><select aria-label="Department"><option>Department</option><option>Computer Science</option></select><select aria-label="Semester"><option>Semester</option><option>4th</option></select></section><section className="data-card student-table"><div className="table-scroll"><table><thead><tr><th>Student ID</th><th>Name</th><th>Department</th><th>Sem / Sec</th><th>Registration</th><th>Status</th></tr></thead><tbody>{rows.map(student => <tr className={!enabled[student.id] ? "disabled-row" : ""} key={student.id}><td>{student.id}</td><td><span className="mini-avatar">{student.initials}</span><strong>{student.name}</strong><small>{student.email}</small></td><td>{student.dept}</td><td>{student.sem}</td><td><StatusPill tone={student.reg === "Enrolled" ? "green" : student.reg === "Pending" ? "amber" : "red"}>{student.reg}</StatusPill></td><td><button className={`simple-toggle ${enabled[student.id] ? "on" : ""}`} onClick={() => setEnabled({ ...enabled, [student.id]: !enabled[student.id] })} aria-label={`Toggle ${student.name}`}><span /></button></td></tr>)}</tbody></table></div><footer><span>Showing {rows.length} of 45 entries</span><div><button disabled>Previous</button><button>Next</button></div></footer></section></div></main></div>
  );
}

function OperationsDashboard({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const departments = [["Computer Science", "1,240", "1,180", "60"], ["Mechanical Eng.", "980", "830", "150"], ["Civil Engineering", "850", "820", "30"], ["Business Admin", "1,120", "1,048", "72"]];
  return (
    <div className="portal-shell screen-enter"><SideNav variant="operations" active="dashboard" dashboardTarget="operations" onNavigate={onNavigate} /><main className="portal-with-topbar"><TopBar /><div className="portal-content dashboard-main"><header className="page-heading"><div><h1>Operational Dashboard</h1><p>Daily management metrics and operational alerts.</p></div></header><section className="kpi-grid"><KpiCard label="Total Students" value="14,258" /><KpiCard label="Total Faculty" value="845" /><KpiCard label="Pending Face Reg." value="312" badge="Action Req" tone="danger" /><AttendanceKpi operational /></section><section className="dashboard-grid"><article className="data-card department-progress"><header><h2>Registration Progress by Department</h2><button onClick={() => onNavigate("students")}>Manage Registrations →</button></header><table><thead><tr><th>Department</th><th>Total Students</th><th>Face Registered</th><th>Pending</th><th>Status</th></tr></thead><tbody>{departments.map((row, index) => <tr key={row[0]}>{row.slice(0, 4).map((value, cell) => <td className={cell === 3 && Number(value.replace(",", "")) > 50 ? "red" : ""} key={cell}>{value}</td>)}<td><i className={`mini-progress ${index === 1 ? "danger" : ""}`} /></td></tr>)}</tbody></table></article><Alerts /></section></div></main></div>
  );
}

const subjectRows = [["Data Structures & Algorithms", "45", "42", "93%", "On Track"], ["Operating Systems", "40", "36", "90%", "On Track"], ["Database Management", "38", "31", "81%", "Borderline"], ["Computer Networks", "42", "29", "69%", "At Risk"]];

function StudentDashboard({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="portal-shell screen-enter"><SideNav variant="student" active="attendance" dashboardTarget="student" onNavigate={onNavigate} /><main className="portal-with-topbar student-dashboard"><TopBar title="EduTrack Pro" search="Search..." /><div className="portal-content"><header className="page-heading"><div><h1>My Attendance</h1><p>Track your academic progress across all subjects.</p></div><small>Last updated: Today, 09:41 AM</small></header><section className="student-dashboard-grid"><article className="overall-card"><h2>Overall Progress</h2><div className="donut student-donut" style={{ "--progress": "85%" } as React.CSSProperties}><strong>85%</strong><small>Present</small></div><dl><div><dt>Total Classes</dt><dd>240</dd></div><div><dt>Attended</dt><dd>204</dd></div></dl></article><article className="student-profile"><span className="profile-photo">AC</span><h2>Alex Carter</h2><p>B.Sc. Computer Science</p><dl><div><dt>Student ID</dt><dd>CS-2023-042</dd></div><div><dt>Semester</dt><dd>Fall 2024 (Sem 5)</dd></div><div><dt>Status</dt><dd><StatusPill tone="green">Active Student</StatusPill></dd></div></dl></article><article className="data-card subjects-card"><header><h2>Subject-wise Breakdown</h2><button onClick={() => onNavigate("history")}>View Details →</button></header><table><thead><tr><th>Subject Name</th><th>Classes</th><th>Attended</th><th>Progress</th><th>Status</th></tr></thead><tbody>{subjectRows.map(row => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td><strong>{row[3]}</strong><i className={`subject-progress p-${row[3].replace("%", "")}`} /></td><td><StatusPill tone={row[4] === "On Track" ? "green" : row[4] === "Borderline" ? "amber" : "red"}>{row[4]}</StatusPill></td></tr>)}</tbody></table></article><article className="recent-card"><h2>Recent History</h2>{[["Data Structures & Algorithms", "Today, 10:00 AM - Dr. Smith", true], ["Computer Networks", "Yesterday, 02:00 PM - Prof. Lee", false], ["Operating Systems", "Oct 24, 09:00 AM - Dr. Adams", true]].map(item => <div key={String(item[0])}><span className={item[2] ? "present" : "absent"}>{item[2] ? "✓" : "×"}</span><p><strong>{item[0]}</strong>{item[1]}</p><small className={item[2] ? "green" : "red"}>{item[2] ? "Present" : "Absent"}</small></div>)}</article></section></div></main></div>
  );
}

function PrincipalDashboard({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="portal-shell screen-enter"><SideNav variant="principal" active="dashboard" dashboardTarget="principal" onNavigate={onNavigate} /><main className="portal-with-topbar principal-main"><TopBar title="EduTrack Pro" search="Search students, faculty, or reports..." /><div className="portal-content"><header className="page-heading"><div><h1>Institutional Oversight</h1><p>Real-time attendance metrics and administrative health.</p></div><button className="button-outline">Today, Oct 24</button></header><section className="principal-kpis"><KpiCard label="Total Students" value="12,450" badge="+2.4%" /><KpiCard label="Total Faculty" value="842" /><KpiCard label="Departments" value="24" /><KpiCard label="Classes Today" value="412" /><article className="institution-card"><h2>Institution Attendance</h2><p>Overall completion rate today</p><div><strong>94.2%</strong><span>↓ 0.8% vs last week</span></div><i><b /></i></article></section><section className="principal-detail-grid"><article className="data-card"><header><h2>Department Performance</h2><button onClick={() => onNavigate("reports")}>Open analytics →</button></header>{[["Computer Science", 96], ["Electrical Engineering", 92], ["Mechanical Engineering", 89], ["Business Administration", 94]].map(row => <div className="department-bar" key={String(row[0])}><span>{row[0]}</span><i><b style={{ width: `${row[1]}%` }} /></i><strong>{row[1]}%</strong></div>)}</article><Alerts title="Institution Alerts" /></section></div></main></div>
  );
}

export function SmartAttendPortal() {
  const [screen, setScreen] = useState<Screen>("login");
  const [captured, setCaptured] = useState(1);
  const [toast, setToast] = useState("");

  const navigate = (next: Screen) => {
    setScreen(next);
    if (next === "capture" && captured === 3) setCaptured(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (screen !== "processing") return;
    const timer = window.setTimeout(() => setScreen("review"), 2100);
    return () => window.clearTimeout(timer);
  }, [screen]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const content = useMemo(() => {
    switch (screen) {
      case "login": return <LoginScreen onLogin={() => navigate("faculty")} />;
      case "faculty": return <FacultyDashboard onNavigate={navigate} />;
      case "start": return <StartAttendance onNavigate={navigate} />;
      case "capture": return <CaptureScreen captured={captured} setCaptured={setCaptured} onNavigate={navigate} />;
      case "processing": return <ProcessingScreen />;
      case "review": return <ReviewScreen onNavigate={navigate} onToast={setToast} />;
      case "confirmation": return <ConfirmationScreen onNavigate={navigate} />;
      case "history": return <HistoryScreen onNavigate={navigate} onToast={setToast} />;
      case "reports": return <ReportsScreen onNavigate={navigate} onToast={setToast} />;
      case "admin": return <AdminDashboard onNavigate={navigate} />;
      case "students": return <StudentManagement onNavigate={navigate} onToast={setToast} />;
      case "operations": return <OperationsDashboard onNavigate={navigate} />;
      case "student": return <StudentDashboard onNavigate={navigate} />;
      case "principal": return <PrincipalDashboard onNavigate={navigate} />;
    }
  }, [captured, screen]);

  return (
    <div className={`portal-root portal-screen-${screen}`}>
      {content}
      <DemoSwitcher screen={screen} onChange={navigate} />
      {toast && <div className="portal-toast" role="status">✓ {toast}</div>}
    </div>
  );
}
