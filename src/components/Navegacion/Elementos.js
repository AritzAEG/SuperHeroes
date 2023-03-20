import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #727976;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    background: #727976;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    opacity: 1;
    color: white;
    
    &.active {
        color: #060606;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #060606;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #060606;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;


    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    background-color: #727976;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 10px;
    background: #6d5548;
    padding: 10px 60px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @:hover {
        transition: all 0.2s ease-in-out;
    }
`;