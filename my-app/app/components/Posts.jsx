import Post from './Post';

export default function Posts() {
    const posts = [
        {
            id: '1',
            username: 'sungsoo',
            userImg: 'https://pbs.twimg.com/profile_images/1591992476851503104/gHHIU14I_400x400.jpg',
            img: 'https://mblogthumb-phinf.pstatic.net/MjAxODA4MDhfNzUg/MDAxNTMzNjkxNTk3MTEy.rFG4MLYU1g0BkYziEYSZjAwn9eL_gqPKXBxSwQsEpiog.DvrLbueV8lZTx8PBsuGHOR6Xo0DOU04vNdCUlIwPO-kg.JPEG.chesungmin/%EC%9A%B0%EC%99%81%EA%B5%B3_%ED%9C%A0%EB%9D%BC_%EC%A0%9C%EB%8B%88%ED%9B%88.jpg?type=w2',
            caption: 'Thanks hi',
        },
        {
            id: '2',
            username: 'sungzoo',
            userImg:
                'https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2022/08/29163731/%ED%99%94%EB%A9%B4-%EC%BA%A1%EC%B2%98-2022-08-29-143655-1.png',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXGB8jQ3UeUtC0kWffwDPnxRYwpYAUiQDzw&usqp=CAU',
            caption: 'get up',
        },
    ];
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                ></Post>
            ))}
        </div>
    );
}
