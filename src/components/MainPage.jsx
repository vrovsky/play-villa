import React from "react";

export default function MainPage() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Play Villa
        </h1>
        <p className="text-xl md:text-2xl italic mb-10">
          What happens at Play Villa... stays in your body.
        </p>
        <a
          href="#about"
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          ↓ Scroll to Explore
        </a>
      </section>

      {/* About Us */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-300">
          Play Villa is a private sex-positive retreat for the curious, the
          conscious, and the brave. We mix art, kink, and emotional safety to
          create a space of connection, exploration, and sensual freedom. Our
          values are consent, care, creativity — and joy.
        </p>
      </section>

      {/* Past Events */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-700 rounded-xl" />
            <div className="aspect-square bg-gray-700 rounded-xl" />
            <div className="aspect-square bg-gray-700 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-800 aspect-square rounded-lg" />
            <div className="bg-gray-800 aspect-square rounded-lg" />
            <div className="bg-gray-800 aspect-square rounded-lg" />
            <div className="bg-gray-800 aspect-square rounded-lg" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-lg mb-4 text-gray-300">
          Want to know more? Get in touch.
        </p>
        <div className="space-y-2">
          <p>
            Email:{" "}
            <a href="mailto:playvilla.lisbon@gmail.com" className="underline">
              playvilla.lisbon@gmail.com
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/play_villa"
              target="_blank"
              className="underline"
            >
              @play_villa
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()} Play Villa. 18+ only. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
