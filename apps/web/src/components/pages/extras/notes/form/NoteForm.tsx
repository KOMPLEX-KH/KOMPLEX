import { useState } from "react";

interface NoteFormProps {
  onSubmit: (note: { title: string; content: string; tags: string[] }) => void;
  onCancel: () => void;
  availableTags: string[];
}

export default function NoteForm({ onSubmit, onCancel, availableTags }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]); // Only one tag at a time

  // Only one tag can be selected at a time
  const handleTagSelect = (tag: string) => {
    setTags([tag]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content, tags });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-blue-700 tracking-tight">បង្កើតកំណត់ត្រាថ្មី</h2>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">ចំណងជើង</label>
        <input
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 bg-gray-50 focus:outline-none focus:bg-white transition"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="បញ្ចូលចំណងជើង..."
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">មាតិកា</label>
        <textarea
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 min-h-[100px] bg-gray-50 focus:outline-none focus:bg-white transition resize-none"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="សរសេរមាតិកានៅទីនេះ..."
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">Tag</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {availableTags.map(tag => (
            <button
              type="button"
              key={tag}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all focus:outline-none ${tags[0] === tag ? 'bg-blue-500 text-white' : 'bg-gray-100 border-gray-300 text-gray-600 hover:bg-blue-50'}`}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button type="button" onClick={onCancel} className="px-5 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">បោះបង់</button>
        <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold shadow-md">រក្សាទុក</button>
      </div>
    </form>
  );
}