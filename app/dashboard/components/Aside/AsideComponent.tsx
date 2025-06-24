"use client";
import { changeVal } from "@/app/libs/features/selectedSlice";
import { AppDispatch, RootState } from "@/app/libs/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AsideComponent = ({
    children,
    val,
}: {
    children: React.ReactNode;
    val: number;
}) => {
    const handleClickEvent = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        e.preventDefault();
        dispatch(changeVal(val));
    };

    const dispatch = useDispatch<AppDispatch>();
    const { value } = useSelector((state: RootState) => state.selected);

    if (value == val) {
        return (
            <div
                className="flex cursor-pointer gap-4 rounded-xl bg-(--selected-btn-primary-bg) px-3 py-3 font-bold text-(--selected-text-primary)"
                onClick={(e) => handleClickEvent(e)}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className="flex cursor-pointer gap-4 rounded-xl px-3 py-3 font-bold"
            onClick={(e) => handleClickEvent(e)}
        >
            {children}
        </div>
    );
};

export default AsideComponent;
