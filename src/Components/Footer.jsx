// IMPORT Link
import { Link } from "react-router-dom";

// IMPORT OUTLET
import { Outlet } from "react-router-dom";

function Footer() {
	return (
		<>
			<div className="page-container">
				<main>
					<Outlet />
				</main>

				<footer>
					<div className="copyright-section">
						<p>
							Made with ❤️ ©2023 All Right Reserved by{" "}
							<Link
								className="footer-link"
								to="https://www.linkedin.com/in/indratinotpatole/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Indra
							</Link>{" "}
							and{" "}
							<Link
								className="footer-link"
								to="https://www.linkedin.com/in/yin-yee-koh-b1874349/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Crystine
							</Link>
						</p>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Footer;
