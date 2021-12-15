import { Link as LinkWouter} from "wouter";
import styled from '@emotion/styled';


export const Link = styled(LinkWouter)`
    align-self: center;
    width: 50%;
    padding: 8px 16px;
    font-size: 2vh;
    font-weight: 600;
    color: var(--theme-body-txt);
    background-color: var(--brand-color_3);
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;

    animation: { props.origin === "notFound" ? 'back 1.5s ease-out infinite;' : '' };

    &:hover {
    background-color: var(--brand-color_6);
    }

    &[disabled] {
        opacity: .3;
        pointer-events: none;
    }

    ${'' /* Modal */}
    { props.origin === "modal" ? "display: block; margin-bottom: 32px;" : '' };
`;

export const Button = Link.withComponent('button');