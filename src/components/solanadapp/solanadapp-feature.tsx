'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../solana/solana-provider'
import { AppHero, ellipsify } from '../ui/ui-layout'
import { ExplorerLink } from '../cluster/cluster-ui'
import { useSolanadappProgram } from './solanadapp-data-access'
import { SolanadappCreate, SolanadappList } from './solanadapp-ui'

export default function SolanadappFeature() {
  let { publicKey } = useWallet()
  const { programId } = useSolanadappProgram()

  return publicKey ? (
    <div>
      <AppHero
        title="Solanadapp"
        subtitle={
          'Create your journal here!'
        }
      >
        <p className="mb-6">
          <ExplorerLink path={`account/${programId}`} label={ellipsify(programId.toString())} />
        </p>
        <SolanadappCreate />
      </AppHero>
      <SolanadappList />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton />
        </div>
      </div>
    </div>
  )
}
