import {
  Html,
  Head,
  Text,
  Tailwind,
  Body,
  Heading,
  Container,
  Section,
} from "@react-email/components";

export default function Email({ data }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Container className="bg-white p-6 flex flex-col items-center">
            <Heading as="h1">New Contact Message</Heading>
            <Section class="p-6 border-dashed border-2 border-[#CCCCCC]">
              <Heading as="h3">Name</Heading>
              <Text>{data?.name}</Text>
              <Heading as="h3">Email</Heading>
              <Text>{data?.email}</Text>
              <Heading as="h3">Subject</Heading>
              <Text>{data?.subject}</Text>
              <Heading as="h3">Message</Heading>
              <Text>{data?.message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
