import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div( ( {done}: ContainerProps )=> (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    position: relative;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    .remove {
        text-align: center;
        width: 25px;
        height: 25px;
        background-color: #797a81;
        position: absolute;
        right: 20px;
        border-radius: 5px;
    }

    label {
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
))