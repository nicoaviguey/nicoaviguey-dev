function ContactCard() {
  return (
    <div className="bg-pastel-rosa p-4 rounded-lg shadow-md">
      <h2 className="font-semibold text-base mb-2 text-pastel-gris">📮 Contacto</h2>
      <ul className="text-sm text-pastel-gris space-y-1">
        <li><a href="mailto:nicoaviguey.ap@gmail.com">📧 nicoleaviguey.ap@gmail.com</a></li>
        <li><a href="https://github.com/nicoaviguey">💻 github.com/nicoaviguey</a></li>
        <li><a href="https://www.nicoaviguey.dev/">🌐 www.nicoaviguey.dev</a></li>
      </ul>
    </div>
  );
}

export default ContactCard;
