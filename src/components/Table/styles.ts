import styled from "styled-components";

export const Container = styled.div`
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        overflow-x: auto;

        tr {
            &:hover {
                opacity: 0.8;
            }
        }

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:nth-child(2) {
                color: var(--text-title);
            }

            &:last-child{
                padding: 2rem 2.5rem 2rem 0;
                border-radius:0 0.5rem 0.5rem 0;
                display: flex;
                justify-content: center;
            }

            button {
                display: flex;
                margin: 0 auto;
                background: transparent;
                transition: 0.3s;
                border: none;

                &:hover{
                    opacity: 0.7;
                }

                padding: 0.5rem;
            }
        }
    }

    @media screen and (max-width: 630px) {
        table thead {
          border: none;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        
        table tr {
          border-bottom: 3px solid #ddd;
          display: block;
        }
        
        table td {
          border-bottom: 1px solid #ddd;
          display: block;
          text-align: left;
        }
        
        table td::before {
          content: attr(data-label);
          float: left;
        }
      }
`;