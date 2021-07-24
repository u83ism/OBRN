/**
 * NullもしくはUndefinedである.
 * 
 * @link https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined#dochiradearukawochekkusuru
 * @param target 
 * @returns 
 */
export const isNullOrUndefined = (target: unknown): boolean => {
	return target == null
}