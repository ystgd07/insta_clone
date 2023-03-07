import Post from './Post';

export default function Posts() {
    const posts = [
        {
            id: '1',
            username: 'sungsoo',
            userImg: '',
            img: '',
            caption: 'Thanks hi',
        },
        {
            id: '2',
            username: 'sungzoo',
            userImg: '',
            img: '',
            caption: 'get up',
        },
    ];
    return (
        <div>
            {posts.map((post) => {
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                ></Post>;
            })}
        </div>
    );
}
