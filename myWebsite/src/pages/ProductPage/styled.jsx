import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    padding-top: 100px;

    a {
        color: lightseagreen;
    }

    a:hover {
        color: lightpink;
    }

    .bread-crumbs {
        margin-bottom: 20px;
    }

    .productArea {
        display: flex;
        flex-wrap: wrap;
    }

    .productArea a {
        width: 100%;
    }

    @media screen and (min-width: 576px) {
        .productArea a {
            width: 50%;
        }
    }

    @media screen and (min-width: 768px) {
        .productArea a {
            width: 33.333333%;
        }
    }

    @media screen and (min-width: 992px) {
        .productArea a {
            width: 25%;
        }
    }
`;
