import { styled } from '@mui/material';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

const AuthPageLayoutW = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const AuthFormPaper = styled(Paper)`
  width: 450px;
  padding: 40px;
`;

interface AuthPageLayoutProps {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}

export function AuthPageLayout({
  title,
  subtitle,
  children,
}: AuthPageLayoutProps) {
  return (
    <AuthPageLayoutW>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography marginBottom="40px">{subtitle}</Typography>
      <AuthFormPaper>{children}</AuthFormPaper>
    </AuthPageLayoutW>
  );
}
