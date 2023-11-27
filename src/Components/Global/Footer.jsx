import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container_footer">
                <div className="container_footer--redes">
                <p>Nuestras redes:</p>
                <img className='svgImg' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiM3MGE5ODkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNOCwzYy0yLjc2MSwwIC01LDIuMjM5IC01LDV2OGMwLDIuNzYxIDIuMjM5LDUgNSw1aDhjMi43NjEsMCA1LC0yLjIzOSA1LC01di04YzAsLTIuNzYxIC0yLjIzOSwtNSAtNSwtNXpNMTgsNWMwLjU1MiwwIDEsMC40NDggMSwxYzAsMC41NTIgLTAuNDQ4LDEgLTEsMWMtMC41NTIsMCAtMSwtMC40NDggLTEsLTFjMCwtMC41NTIgMC40NDgsLTEgMSwtMXpNMTIsN2MyLjc2MSwwIDUsMi4yMzkgNSw1YzAsMi43NjEgLTIuMjM5LDUgLTUsNWMtMi43NjEsMCAtNSwtMi4yMzkgLTUsLTVjMCwtMi43NjEgMi4yMzksLTUgNSwtNXpNMTIsOWMtMS42NTY4NSwwIC0zLDEuMzQzMTUgLTMsM2MwLDEuNjU2ODUgMS4zNDMxNSwzIDMsM2MxLjY1Njg1LDAgMywtMS4zNDMxNSAzLC0zYzAsLTEuNjU2ODUgLTEuMzQzMTUsLTMgLTMsLTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
                <img className='svgImg' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiM3MGE5ODkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTIsMmMtNS41MjMsMCAtMTAsNC40NzcgLTEwLDEwYzAsNS4wMTMgMy42OTMsOS4xNTMgOC41MDUsOS44NzZ2LTcuMjI2aC0yLjQ3NHYtMi42MjloMi40NzR2LTEuNzQ5YzAsLTIuODk2IDEuNDExLC00LjE2NyAzLjgxOCwtNC4xNjdjMS4xNTMsMCAxLjc2MiwwLjA4NSAyLjA1MSwwLjEyNHYyLjI5NGgtMS42NDJjLTEuMDIyLDAgLTEuMzc5LDAuOTY5IC0xLjM3OSwyLjA2MXYxLjQzN2gyLjk5NWwtMC40MDYsMi42MjloLTIuNTg4djcuMjQ3YzQuODgxLC0wLjY2MSA4LjY0NiwtNC44MzUgOC42NDYsLTkuODk3YzAsLTUuNTIzIC00LjQ3NywtMTAgLTEwLC0xMHoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="/>
                <img className='svgImg' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiM3MGE5ODkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTkuMDc3LDQuOTI4Yy0xLjg4NiwtMS44ODcgLTQuMzk0LC0yLjkyNyAtNy4wNjYsLTIuOTI4Yy01LjUwNiwwIC05Ljk4Nyw0LjQ3OSAtOS45ODksOS45ODVjLTAuMDAxLDEuNzYgMC40NTksMy40NzggMS4zMzMsNC45OTJsLTEuMzU1LDUuMDIzbDUuMjMzLC0xLjIzN2MxLjQ1OSwwLjc5NiAzLjEwMSwxLjIxNSA0Ljc3MywxLjIxNmgwLjAwNGM1LjUwNSwwIDkuOTg2LC00LjQ4IDkuOTg5LC05Ljk4NWMwLjAwMiwtMi42NjkgLTEuMDM2LC01LjE3OCAtMi45MjIsLTcuMDY2ek0xNi44OTgsMTUuNTU0Yy0wLjIwOCwwLjU4MyAtMS4yMjcsMS4xNDUgLTEuNjg1LDEuMTg2Yy0wLjQ1OCwwLjA0MiAtMC44ODcsMC4yMDcgLTIuOTk1LC0wLjYyNGMtMi41MzcsLTEgLTQuMTM5LC0zLjYwMSAtNC4yNjMsLTMuNzY3Yy0wLjEyNSwtMC4xNjcgLTEuMDE5LC0xLjM1MyAtMS4wMTksLTIuNTgxYzAsLTEuMjI4IDAuNjQ1LC0xLjgzMiAwLjg3NCwtMi4wODFjMC4yMjksLTAuMjUgMC40OTksLTAuMzEyIDAuNjY2LC0wLjMxMmMwLjE2NiwwIDAuMzMzLDAgMC40NzgsMC4wMDZjMC4xNzgsMC4wMDcgMC4zNzUsMC4wMTYgMC41NjIsMC40MzFjMC4yMjIsMC40OTQgMC43MDcsMS43MjggMC43NjksMS44NTNjMC4wNjIsMC4xMjUgMC4xMDQsMC4yNzEgMC4wMjEsMC40MzdjLTAuMDgzLDAuMTY2IC0wLjEyNSwwLjI3IC0wLjI0OSwwLjQxNmMtMC4xMjUsMC4xNDYgLTAuMjYyLDAuMzI1IC0wLjM3NCwwLjQzN2MtMC4xMjUsMC4xMjQgLTAuMjU1LDAuMjYgLTAuMTEsMC41MDljMC4xNDYsMC4yNSAwLjY0NiwxLjA2NyAxLjM4OCwxLjcyOGMwLjk1NCwwLjg1IDEuNzU3LDEuMTEzIDIuMDA3LDEuMjM5YzAuMjUsMC4xMjUgMC4zOTUsMC4xMDQgMC41NDEsLTAuMDYzYzAuMTQ2LC0wLjE2NiAwLjYyNCwtMC43MjggMC43OSwtMC45NzhjMC4xNjYsLTAuMjUgMC4zMzMsLTAuMjA4IDAuNTYyLC0wLjEyNWMwLjIyOSwwLjA4MyAxLjQ1NiwwLjY4NyAxLjcwNSwwLjgxMmMwLjI1LDAuMTI1IDAuNDE2LDAuMTg3IDAuNDc4LDAuMjkxYzAuMDYyLDAuMTAzIDAuMDYyLDAuNjAzIC0wLjE0NiwxLjE4NnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="/>
                </div>
                <p className="about">Copyright &copy; - 2023 - <NavLink to="/about" className={'about-link'}>GRUPO 3</NavLink>{" "}- All rights reserved</p>
            </div>

        </>
    );
};

export default Footer;
