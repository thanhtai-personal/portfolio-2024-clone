import {expect, test} from '@oclif/test'

describe('create:rest-controller', () => {
  test
  .stdout()
  .command(['create:rest-controller'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['create:rest-controller', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
