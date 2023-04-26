import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    padding-top: 100px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 70px;
    }

    .carousel {
        overflow: hidden;
        position: relative;
    }

    .carousel ul.img-list {
        list-style: none;
        padding: 0;
        display: flex;
        width: 500%;
    }

    .carousel ul.img-list li {
        flex: 1 0 0;
    }

    .carousel ul.img-list img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .prevPage,
    .nextPage {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e0ffff43;
    }

    .prevPage {
        left: 0;
    }

    .nextPage {
        right: 0;
    }
`;
