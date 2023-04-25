import React from 'react';
import { getPosts } from '../api/posts';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Post from './Post';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Posts = () => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        error,
        data: posts,
    } = useQuery('posts', getPosts);

    console.log('posts', posts);
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 375: 1, 992: 2, 1400: 3, 1800: 4 }}
        >
            <Masonry>
                {posts &&
                    posts.posts.map((post) => {
                        return <Post post={post} key={post.title} />;
                    })}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default Posts;
