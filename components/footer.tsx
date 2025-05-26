export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary dark:bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="mb-4">&copy; {currentYear} Samarjit Thakuria. All rights reserved.</p>
        <p className="text-sm text-blue-200">Full Stack Developer | Open Source Contributor</p>
      </div>
    </footer>
  );
}
