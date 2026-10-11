import { FaUserCircle } from "react-icons/fa";

type Person = {
  name: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

const people: Person[] = [

  { name: "Tony Stark", loginId: "001234561S", section: "S101", role: "STUDENT", lastActivity: "2020-10-01", totalActivity: "10:21:32" },
  { name: "Bruce Wayne", loginId: "001234562S", section: "S101", role: "STUDENT", lastActivity: "2020-11-02", totalActivity: "23:32:23" },
  { name: "Steve Rogers", loginId: "001234563S", section: "S101", role: "STUDENT", lastActivity: "2020-10-02", totalActivity: "13:21:32" },
  { name: "Natasha Romanoff", loginId: "001234564S", section: "S101", role: "TA", lastActivity: "2020-11-05", totalActivity: "11:22:33" },

  { name: "Peter Parker", loginId: "001234565S", section: "S101", role: "STUDENT", lastActivity: "2020-11-10", totalActivity: "08:15:42" },
  { name: "Wanda Maximoff", loginId: "001234566S", section: "S102", role: "STUDENT", lastActivity: "2020-11-12", totalActivity: "14:05:10" },
  { name: "Carol Danvers", loginId: "001234567S", section: "S102", role: "FACULTY", lastActivity: "2020-11-15", totalActivity: "30:45:00" },

  
  { name: "Jane Sample", loginId: "001234568S", section: "S101", role: "STUDENT", lastActivity: "2020-12-01", totalActivity: "05:10:20" },
  { name: "Alex Sample", loginId: "001234569S", section: "S102", role: "STUDENT", lastActivity: "2020-12-02", totalActivity: "06:20:30" },
  { name: "Sam Sample", loginId: "001234570S", section: "S102", role: "TA", lastActivity: "2020-12-03", totalActivity: "07:30:40" },
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.loginId} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {p.name}
              </td>
              <td className="p-2">{p.loginId}</td>
              <td className="p-2">{p.section}</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2">{p.lastActivity}</td>
              <td className="p-2">{p.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}