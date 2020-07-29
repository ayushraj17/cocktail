import React from "react";
import { Button, RadioButtonGroup, Flex, Box, Collapse } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setShow1, setShow2 } from "../actions";

import Category from "./Category";
import Alcoholic from "./Alcoholic";

const CustomRadio = React.forwardRef((props, ref) => {
	const { isChecked, isDisabled, value, ...rest } = props;
	return (
		<Button
			ref={ref}
			variantColor={isChecked ? "customPink" : "gray"}
			aria-checked={isChecked}
			role="radio"
			isDisabled={isDisabled}
			{...rest}
		/>
	);
});

export default function Example() {
	const dispatch = useDispatch();

	const show1 = useSelector((state) => state.show1);
	const show2 = useSelector((state) => state.show2);

	const handleClick = (val) => {
		if (val === "Category") {
			dispatch(setShow1(!show1));
			dispatch(setShow2(false));
		}
		if (val === "Alcoholic") {
			dispatch(setShow2(!show2));
			dispatch(setShow1(false));
		}
	};

	return (
		<div>
			<Flex mt={2} justify="center" align="center" direction={["row", "row"]}>
				<Box p="4" fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
					<Text color="white">Filter By:</Text>
				</Box>
				<RadioButtonGroup
					onChange={(val) => {
						handleClick(val);
					}}
					isInline
				>
					<CustomRadio value="Category">Category</CustomRadio>

					<CustomRadio value="Alcoholic">Alcoholic</CustomRadio>
				</RadioButtonGroup>
			</Flex>
			<Collapse mt={4} isOpen={show1}>
				<Category />
			</Collapse>
			<Collapse mt={4} isOpen={show2}>
				<Alcoholic />
			</Collapse>
		</div>
	);
}
