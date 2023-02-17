import './css/header.css';
// 헤더
function Header(props) {
    const cateList = [
    ]
    for (let i = 0; i < props.cates.length; i++) {
        let t = props.cates[i];
        cateList.push(
            <li className='gnb_li' key={t.id}><a href="/" 
            onClick={event=>{
                event.preventDefault();
                props.onChangeMode(t.id);
            }}>{t.cate}</a></li>
        )
    }
    return (
        <header className='header_wrap'>
            <div className='hedaer'>
                <nav className='gnb'>
                    <ul className='gnb_menu'>
                        {cateList}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
// 카테고리

export default Header;