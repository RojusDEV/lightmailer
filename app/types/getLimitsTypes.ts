// types.ts or directly in getLimits.ts
export interface LimitData {
    emails: number;
    sms: number;
    dailyRequests: number;
}

export interface TestData {
    data: LimitData;
}
