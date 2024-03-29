import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
    const links = [
        { title: "Homepage", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Blog", path: "/blog" }
    ];

    // TEMPORARY: Hardcoded values for session and isAdmin
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
            {session && (
                <>
                    {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                    <button className={styles.logout}>Logout</button>
                </>
            )}
            {!session && <NavLink item={{ title: "Login", path: "/login" }} />}
        </div>
    );
};

export default Links;
