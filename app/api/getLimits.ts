import { LimitData, TestData } from "../types/getLimitsTypes";

async function getData(): Promise<TestData | null> {
    try {
        const res = await fetch("/services/testData.json");
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching test data:", error);
        return null;
    }
}

export default async function getLimits(): Promise<LimitData | null> {
    const data = await getData();
    return data?.data ?? null; // only return the inner `data`, or null
}
