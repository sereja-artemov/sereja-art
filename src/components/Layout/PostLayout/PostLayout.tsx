import s from './PostLayout.module.scss';


function PostLayout({post, children}) {
  console.log(post)

  // let options = {
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric',
  //   timezone: 'UTC'
  // };
  //
  // let date = post.meta.date;
  // let rudate = new Date(date).toLocaleString("ru", options);
  //

  return (
    <section className={s.postLayout}>

      <article className={s.post}>
        <div className={s.topBlock}>
          <h1 className={s.title}>{post.meta.title}</h1>
          <div className={s.info}>
            <span className={s.date}>{post.meta.stringDate}</span>
            <div className={s.readingInfo}>
              <span className={s.time}>{post.meta.readingTime.text}</span>
              <span className={s.words}>{post.meta.readingTime.words}<span> слов</span></span>
            </div>
          </div>
        </div>
        {children}
      </article>
    </section>
  );
}

export default PostLayout;
