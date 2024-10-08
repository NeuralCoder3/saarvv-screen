import { useSearchParams } from "react-router-dom";

function attribute<T>(name:string, defaultValue:string, postprocess?: (value: string) => T): () => T {
    return () => {
        const [searchParams] = useSearchParams();
        const v = decodeURIComponent(searchParams.get(name) || "") || defaultValue;
        if (postprocess) {
            return postprocess(v);
        }
        return v as T;
    };
}

export const first_date = attribute<Date>("first_date", "2024-10-01T00:00:00", (v) => new Date(v));
export const second_date = attribute<Date>("second_date", "2024-11-01T03:00:00", (v) => new Date(v));
export const name = attribute<string>("name", "Max Mustermann");
export const birthday = attribute<string>("birthday", "12.34.5678");
export const ticket_number = attribute<string>("ticket_number", "1234.567890");
export const code_url = attribute<string>("code_url", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Code-aztec.png/220px-Code-aztec.png");
