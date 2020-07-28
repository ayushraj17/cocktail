import React from "react";
import { Button, RadioButtonGroup, Flex, Box, Collapse } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

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

export default function Example({ filter }) {
	const [value, setValue] = React.useState("");
	const [show1, setShow1] = React.useState(false);
	const [show2, setShow2] = React.useState(false);

	const handleClick = (val) => {
		if (val === "Category") {
			setShow1(!show1);
			setShow2(false);
		}
		if (val === "Alcoholic") {
			setShow2(!show2);
			setShow1(false);
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
						setValue(val);
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
