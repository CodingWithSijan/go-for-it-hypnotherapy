const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Go For It Hypnotherapy. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-blue-400 hover:underline">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
