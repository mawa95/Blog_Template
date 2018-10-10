import React from "react";

export default class Article extends React.Component {
    render() {
        return (
            <div>
                <ArticleOne/>
            </div>
        )
    }
}

class ArticleOne extends React.Component {
    render() {
        return (
            <div className='article_one'>
                <div className='container'>
                    <div className='title_article'><span>BLOG</span><i className="fas fa-circle"></i><span>PHOTOGRAPHY</span></div>
                    <h3>Exploring My Surroundings</h3>
                    <img src='../images/kaboompics_Group%20of%20people%20examining%20a%20map.jpg'></img>
                    <div className='post_description'>MARCH 27, 2018</div>
                    <hr/>
                    <div className='post_description'>BY LAVENDER</div>
                    <hr/>
                    <div className='post_description'>1 COMMENT</div>
                    <p><span className='first_letter'>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aspernatur assumenda,
                        beatae consectetur cupiditate, deserunt maxime molestiae mollitia natus provident sapiente
                        totam
                        voluptates. Deserunt dolores est eveniet non possimus quam?Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores cupiditate dolorem doloremque enim est facere harum
                        in
                        molestias neque numquam, perspiciatis placeat praesentium qui, reiciendis repellendus
                        reprehenderit temporibus vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus asperiores consequatur culpa deleniti dolore, fugiat fugit incidunt magnam minus
                        reprehenderit. A accusamus blanditiis ex id magnam nam quam. Dolores, quisquam.</p>
                    <button className='button_continueReading'>Continue reading</button><hr/>
                    <div className='share'>
                        <p>Share:</p>
                        <div className='share_icon'>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// class ArticleTwo extends React.Component {
//     render() {
//         return (
//             <div className='article'>
//                 <h2>Sample Page Example</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//                     laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper
//                     suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
//                     hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
//                     accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend
//                     option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
//                     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
//                     dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
//                     praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
//                     soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim
//                     assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.
//                     <br/><br/>
//                     <img src='../images/kaboompics_Plants%20of%20Portugal.jpg'></img>
//                     Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam
//                     processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
//                     gothica, quam nunc putamus parum claram. Duis autem vel eum iriure dolor in hendrerit in vulputate
//                     velit esse molestie consequat.Investigationes demonstraverunt lectores legere me lius quod ii legunt
//                     saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
//                     Mirum est notare quam littera gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
//                     humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
//                     parum clari, fiant sollemnes in futurum.
//                     <br/><br/>
//                     Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam
//                     processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
//                     gothica, quam nunc putamus parum claram,anteposuerit litterarum formas humanitatis per seacula
//                     quarta decima et quinta. Mirum est notare quam littera gothica, quam nunc putamus parum
//                     claram,anteposuerit. Investigationes demonstraverunt lectores legere me lius quod.
//                 </p>
//             </div>
//         )
//     }
// }