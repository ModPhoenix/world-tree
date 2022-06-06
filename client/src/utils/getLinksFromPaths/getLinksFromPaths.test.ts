import { getLinksFromPaths } from '.';

const MOCK_PATHS = {
  index: '/',
  login: 'login',
  notFound: '404',
  admin: {
    index: 'admin',
    dashboard: 'dashboard',
  },
  nestingLevel1: {
    index: 'nestingLevel1',
    nestingLevel2: {
      index: 'nestingLevel2',
      nestingLevel3: {
        index: 'nestingLevel3',
        notes: 'notes',
        test4: {
          index: 'test4',
        },
      },
      test3: 'test3',
    },
  },
} as const;

describe('getLinksFromPaths', () => {
  test('index link should always to be "/"', () => {
    const Links = getLinksFromPaths(MOCK_PATHS);

    expect(Links.index).toBe('/');
  });
  test('all 1 level nested Links should have prefix with parent index 0 level', () => {
    const Links = getLinksFromPaths(MOCK_PATHS);

    expect(Links.login).toBe('/login');
    expect(Links.notFound).toBe('/404');
  });
  test('all 2 level nested Links should have prefix with parent indexes 0 and 1 level', () => {
    const Links = getLinksFromPaths(MOCK_PATHS);

    expect(Links.admin.dashboard).toBe('/admin/dashboard');
    expect(Links.nestingLevel1.nestingLevel2.index).toBe(
      '/nestingLevel1/nestingLevel2',
    );
  });
  test('all 3 level nested Links should have prefix with parent indexes 0,1 and 2 level', () => {
    const Links = getLinksFromPaths(MOCK_PATHS);

    expect(Links.nestingLevel1.nestingLevel2.nestingLevel3.index).toBe(
      '/nestingLevel1/nestingLevel2/nestingLevel3',
    );
    expect(Links.nestingLevel1.nestingLevel2.test3).toBe(
      '/nestingLevel1/nestingLevel2/test3',
    );
  });
  test('all 4 level nested Links should have prefix with parent indexes  0,1,2 and 3 level', () => {
    const Links = getLinksFromPaths(MOCK_PATHS);

    expect(Links.nestingLevel1.nestingLevel2.nestingLevel3.notes).toBe(
      '/nestingLevel1/nestingLevel2/nestingLevel3/notes',
    );
    expect(Links.nestingLevel1.nestingLevel2.nestingLevel3.test4.index).toBe(
      '/nestingLevel1/nestingLevel2/nestingLevel3/test4',
    );
  });
});
