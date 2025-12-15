interface TestPlainProps {
    title: string;
    size: number;
    render?: () => React.ReactNode;
}

export const TestPlain = (Props: TestPlainProps) => {
    const { title , render } = Props;
    return <div>this is a test plain, {title},,{render?.()} </div>;
}