export default function Testimonial({ quote, author }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center shadow-sm">
      <blockquote className="text-xl italic text-gray-800 leading-relaxed">
        “{quote}”
      </blockquote>

      <p className="mt-4 text-sm text-gray-600">
        — {author}
      </p>
    </div>
  );
}
