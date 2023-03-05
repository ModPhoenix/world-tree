import { Divider } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const BreadcrumbsWrapper = styled('div')`
  display: flex;
`;

export interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  siblings: Breadcrumb[];
}

export function Breadcrumbs({
  breadcrumbs,
  siblings,
}: BreadcrumbsProps): JSX.Element {
  return (
    <BreadcrumbsWrapper role="presentation">
      <MuiBreadcrumbs aria-label="breadcrumb" separator="">
        {breadcrumbs.map((item) => (
          <Chip
            component={Link}
            key={item.label}
            to={item.href}
            label={item.label}
            color="primary"
          />
        ))}
      </MuiBreadcrumbs>
      {siblings.length > 0 ? (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 2,
          }}
        />
      ) : null}
      <MuiBreadcrumbs aria-label="breadcrumb" separator="">
        {siblings.map((item) => (
          <Chip
            component={Link}
            key={item.label}
            to={item.href}
            label={item.label}
          />
        ))}
      </MuiBreadcrumbs>
    </BreadcrumbsWrapper>
  );
}
