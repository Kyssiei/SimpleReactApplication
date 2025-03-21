
function Footer(){

    return(
        <div className="Footer">
            <div>
                <p>Connect with me!</p>
            </div>
            <div>
                <nav className="nav">
                    <a href="#">Instagram</a>
                    <a href="#">Tik Tok</a>
                    <a href="#">Pinterest</a>
                    <a href="#">YouTube</a>
                </nav>
            </div>
            <div>
                <h4 className="copyRights">&copy; {new Date().getFullYear()} Whatever Credits</h4>
            </div>
        </div>
    )
}

export default Footer


