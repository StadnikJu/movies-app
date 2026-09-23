/**
import { isErrorWithMessage } from '@/common/utils';
* Type predicate to narrow an unknown error to an object with a string 'status_message' property
*/

export function isErrorWithMessage(error: unknown): error is { status_message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'status_message' in error &&
    typeof (error as any).status_message === 'string'
  )
}