import { expect } from 'testyts/build/lib/assertion/expect';
import { Test } from 'testyts/build/lib/decorators/test.decorator';
import { TestSuite } from 'testyts/build/lib/decorators/testSuite.decorator';

@TestSuite()
export class TestytsTest {
  @Test('TestyTS just works')
  itWorks() {
    expect.toBeEqual(1, 1);
  }
}
