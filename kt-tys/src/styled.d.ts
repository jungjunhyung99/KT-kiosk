import styled from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        accentColor: string;
        textColor: string;
        spanColor: string;
    }
}