import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const PlaygroundWrapper = styled.main`
  padding: 10px 120px;
  color: #000;

  .playground-main {
    text-align: center;

    h1 {
      font-weight: 900;
      font-size: 60px;
      margin-bottom: 80px;
    }

    span {
      color: gray;
    }

    p {
      margin-top: -70px;
      margin-bottom: 90px;
      font-size: 25px;
    }
  }

  .title {
    font-weight: 900;
    font-size: 50px;
  }

  p {
    color: gray;
    font-size: 18px;
    line-height: 25px;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    padding: 0;

    .playground-main {
      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
      }
    }

    .title {
      font-size: 28px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    padding: 20px;

    .playground-main {
      h1 {
        font-size: 50px;
      }
    }
  }
`;

export const Components = styled.div`
  display: flex;

  div {
    width: 100%;
  }
`;

export const CopyWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: -50px 0 50px 0;
  justify-content: center;

  .container {
    width: 30%;
    border-radius: 6px;
    border: 1px solid #b8b8b8;
  }

  input {
    font-family: ubuntu;
    font-size: 20px;
    border: none;
    background: none;
    width: 220px;
    height: 30px;
    padding: 8px 12px;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    margin-top: 5px;

    dialog {
      height: 18px;
      width: 70px;
      border-radius: 3px;
      padding: 3px 0;
      border: none;
      color: #fff;
      margin-top: -35px;
      font-family: ubuntu;
      font-size: 14px;
      background: linear-gradient(to left, #b8b8b8, #707070);
    }

    svg {
      margin-top: 5px;
    }

    :hover {
      cursor: pointer;
    }
  }

  .get-started {
    width: 180px;
    font-size: 16px;
    text-transform: capitalize;
    background: #161515;
    color: #fff;
    /* background: #212020; */
    margin: 0;
    padding: 8px 12px;
    border-radius: 6px;
    font-family: ubuntu;

    a {
      text-decoration: none;
      color: #fff;
    }

    :hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    flex-flow: column;

    .container,
    .get-started {
      width: 100%;
    }

    .get-started {
      height: 50px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 992px) {
    .container,
    .get-started {
      width: 50%;
    }

    .get-started {
      height: 50px;
    }
  }
`;
