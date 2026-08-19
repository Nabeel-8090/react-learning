import Header from '../../components/Header';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <>
            <Header />

            <main className="not-found-page">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
            </main>
        </>
    );
}

export default NotFoundPage;