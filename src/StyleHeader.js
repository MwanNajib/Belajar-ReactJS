import styled from 'styled-components';

export const NavStyle = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr; // Perbaikan typo
    align-items: center;
    height: 50px; // Tambahkan titik koma
    padding: 0 100px;
`;

export const UiStyle = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr); // Perbaikan typo
    justify-self: end;
`;

export const AStyle = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
    font-weight: 400;
    transition: color 0.3s ease-out;
`;
