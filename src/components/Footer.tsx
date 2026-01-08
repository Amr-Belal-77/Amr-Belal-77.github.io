

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm">
            <div className="mb-2">
                <span className="text-slate-500">Built with </span>
                <span className="text-slate-900 font-semibold">Amr Belal</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Amr Belal Arab. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
