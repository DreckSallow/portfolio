"use client";

import { FormEvent } from "react";
import styled from "styled-components";

interface InputRadioProps {
	name: string;
	id: string;
	checked?: boolean;
	className?: string;
	value: string;
	onInput(ev: FormEvent<HTMLInputElement>): unknown;
}

export const Label = styled.label``;

export const InputRadio = ({
	id,
	name,
	checked,
	className,
	value,
	onInput,
}: InputRadioProps) => {
	return (
		<input
			type="radio"
			className={className}
			name={name}
			defaultChecked={checked}
			id={id}
			value={value}
			onInput={onInput}
		/>
	);
};

export const RadioInput = styled(InputRadio)`
  align-items: center;
  appearance: none;
  aspect-ratio: 1;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin-right: 0.3em;
  min-width: 1em;
  position: relative;

  &::before{
    aspect-ratio: 1;
    border-radius: 50%;
    content: "";
    display: block;
    position: absolute;
    transform: scale(0);
    transition: 120ms transform ease-in;
    width: 60%;
  }

  &:checked::before{
    transform: scale(1);
  }
`;
