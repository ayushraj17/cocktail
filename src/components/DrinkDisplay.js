import React from "react";
// import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/core";
import Image, { Shimmer } from "react-shimmer";

function DrinkDisplay({ src, title }) {
	return (
		<div>
			<Box
				borderWidth="1px"
				m={2}
				maxW="sm"
				rounded="lg"
				overflow="hidden"
				bg="white"
			>
				<Image
					src={src}
					// src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
					alt=""
					fallback={<Shimmer />}
				/>
				<Box
					mt="1"
					p="2"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					<Text color="gray">{title}</Text>
				</Box>
			</Box>
		</div>
	);
}

export default DrinkDisplay;
