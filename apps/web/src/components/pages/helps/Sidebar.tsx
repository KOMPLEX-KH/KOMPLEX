'use client';

interface SidebarProps {
  currentTab: number;
  onTabChange: (index: number) => void;
}

export default function Sidebar({ currentTab, onTabChange }: SidebarProps) {
  const tabs = [
    'ស្វែងយល់',
    'គណនាពិន្ទុ',
    'បណ្ណាល័យ',
    'កំណត់ចំណាំ',
    'ផែនការ',
    'រូបមន្ត',
    'ប្រតិទិន',
  ];

  return (
    <aside className="hidden lg:flex w-65 bg-white rounded-3xl shadow p-4 flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold mb-2 text-indigo-600">ជំនួយ</h1>
        <p className="text-gray-500 text-sm">ចែករំលែកចំណេះដឹង និងសួរសំណួររបស់អ្នក</p>
      </div>
      <nav className="flex flex-col space-y-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => onTabChange(i)}
            className={`text-left px-3 py-2 rounded-3xl ${
              currentTab === i ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
}
