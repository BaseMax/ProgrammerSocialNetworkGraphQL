import { Test, TestingModule } from '@nestjs/testing';
import { DevelopersResolver } from './developers.resolver';
import { DevelopersService } from './developers.service';

describe('DevelopersResolver', () => {
  let resolver: DevelopersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopersResolver, DevelopersService],
    }).compile();

    resolver = module.get<DevelopersResolver>(DevelopersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
