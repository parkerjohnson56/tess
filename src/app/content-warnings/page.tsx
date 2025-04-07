export default function ContentWarnings() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-serif text-primary mb-8">Content Warnings</h1>
      <p className="text-lg mb-6">
        I believe in providing content warnings to help readers make informed decisions about their reading experience. Each book page includes specific content warnings relevant to that story.
      </p>
      <p className="text-lg mb-6">
        My books may contain mature themes including but not limited to:
      </p>
      <ul className="list-disc list-inside text-lg mb-6 space-y-2">
        <li>Strong language</li>
        <li>Sexual content</li>
        <li>References to past trauma</li>
        <li>Emotional abuse</li>
        <li>Stalking and harassment</li>
      </ul>
      <p className="text-lg">
        If you have specific concerns about content in any of my books, please don't hesitate to contact me.
      </p>
    </div>
  );
} 